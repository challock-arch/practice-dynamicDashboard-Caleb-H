const DynamicDashboard = () => {
    let user = {
        name:"Michael Scott",
        isPremium: true,
    };

    return (
        <>
        <h1>Hello, {user.name}!</h1>
        </>
    );
}

export default DynamicDashboard;