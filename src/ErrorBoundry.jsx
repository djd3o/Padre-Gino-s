import { Component } from "react";
import {Link} from '@tanstack/react-router'
import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

class ErrorBoundary extends Component {
    state = { hasError: false }
    static getDerivedStateFromError() {
        return { hasError: true}
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught some stupid error", error, info);
    }
    celebrateError = () => {
        this.setState({
            celebration: "lol"
        })
    }
    render() {
        if (this.state.hasError) {
            return (
                <div onClick={this.celebrateError} className="error-boundry">
                    <h2>Uh oh!</h2>
                    <p> There was an error with this page.
                        <Link to="/">Click here </Link> to go back to the home page. 
                    </p>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;