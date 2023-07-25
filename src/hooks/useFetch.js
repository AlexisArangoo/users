import { useState } from "react"
import axios from 'axios'

const useFetch = (baseUrl, callback, callback2, callback3, callback4) => {
  
    const [infoApi, setInfoApi] = useState()

    //GET
    const getApi = (path) => {

        const url = `${baseUrl}${path}/`

        axios.get(url)
            .then(resp => {
                setInfoApi(resp.data)
            })
            .catch(err => console.log(err))
    }

    //POST
    const postApi = (path, data) => {

        const url = `${baseUrl}${path}/`

        axios.post(url, data)
            .then(resp => {
                console.log(resp.data)
                setInfoApi([...infoApi, resp.data])
                callback(true)
                callback2(false)
            })
            .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path, id) => {

        const url = `${baseUrl}${path}/${id}/`

        axios.delete(url)
            .then(resp => {
                console.log(resp.data)
                const infoApiFiltered = infoApi.filter(e => e.id !== id)
                setInfoApi(infoApiFiltered)
                callback3(false)
            })
            .catch(err => console.log(err))

    }

    //UPDATE
    const updateApi = (path, id, data) => {

        const url = `${baseUrl}${path}/${id}/`

        axios.put(url, data)
            .then(resp => {
                console.log(resp.data)
                const infoApiMapped = infoApi.map(e => e.id === id ? resp.data : e)
                setInfoApi(infoApiMapped)
                callback(true)
                callback4(false)
            })
            .catch(err => console.log(err))

    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch