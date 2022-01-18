export const searchQuery = ({ queryName, queryValue }) => {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set(queryName, queryValue)
    window.location.search = urlParams
}
