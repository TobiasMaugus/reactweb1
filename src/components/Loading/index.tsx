import Lottie from "react-lottie";
import loading from "lotties/loading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
};

const Loading = () => {
    return <Lottie options={defaultOptions} height={600} width={800}/>;
};

export default Loading;