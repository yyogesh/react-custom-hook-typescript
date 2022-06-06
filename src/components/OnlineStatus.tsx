import useOnlineStatus from "../hooks/useOnlineStatus"

const OnlineStatus = () => {
    const online = useOnlineStatus();
    return (
        <div>User Online {online.toString()}</div>
    )
}

export default OnlineStatus