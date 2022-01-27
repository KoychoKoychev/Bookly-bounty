import "./Welcome.css";

export default function Welcome(props) {
    return(
        <div className="container">
            <p className="welcome-text">Welcome !</p>
            <p className="greet">Find what you are looking for</p>
            <p className="semi-text">By personalize your account, we can help you to find what you like.</p>
            <a className="start btn-text" href="/personalize">Personalize Your Account</a>
            <a className="skip-btn btn-text" href="/library">Skip</a>
        </div>
    )
}