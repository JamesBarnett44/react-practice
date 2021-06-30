import { useParams } from "react-router";

const Animal = () => {
    const { name } = useParams();

    return (
        <h3> Animal: {name}</h3>
    );
}

export default Animal;