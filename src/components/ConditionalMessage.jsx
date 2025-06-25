const ConditionalMessage = () => {
    let isPremium = true;

    return (
        <>
            <p>{isPremium ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</p>
        </>
    );
}

export default ConditionalMessage;