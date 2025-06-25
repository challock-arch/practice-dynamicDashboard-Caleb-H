const TodaysDate = () => {
    return (
        <p>
        {new Date().toLocaleDateString()}
        </p>
    )
}

export default TodaysDate;