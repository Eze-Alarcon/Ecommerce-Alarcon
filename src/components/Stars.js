function Stars(props) {
    const fullStars = [];
	const completeStars = Math.floor(props.stars)
    const halfStar = Number((props.stars - completeStars).toFixed(1))
    let missingStars = Math.ceil(props.stars)


    for (let i = 0; i < completeStars; i++) {
        fullStars.push("fas fa-star text-yellow-400")
    }
    
    halfStar !== 0 && fullStars.push("fas fa-star-half-alt text-yellow-400")

    for(missingStars; missingStars < 5; missingStars++) {
        fullStars.push("far fa-star text-gray-400")
    }

    return (
        <>
        <i className={fullStars[0]}></i>
        <i className={fullStars[1]}></i>
        <i className={fullStars[2]}></i>
        <i className={fullStars[3]}></i>
        <i className={fullStars[4]}></i>
        </>

    )

}

export default Stars
