import Loading from "./loading"

export const WithLoading = (Component, isLoading) => {
    const MyLoading = () => {
        return (
            isLoading? <Loading />: <Component />
        )
    }

    return MyLoading;
}