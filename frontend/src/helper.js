function getIdFromUrl(url) {

    const matches = url.match(/product\/([0-9a-zA-Z]{1,})/)
    const id = matches[1]
    return id
}

export {getIdFromUrl}