import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
                <strong>Create class of Q&amp;A on live</strong>
                <p>Answer your audience's questions in real-time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Create a new class</h2>

                    <form action="">
                        <input
                            type="text"
                            placeholder="Class name"
                        />
                        <Button type="submit">
                            Create
                        </Button>
                    </form>
                    <p>
                        Would you like to join in existing class ? <Link to="/">Click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}