import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { auth, firebase } from '../services/firebase'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'
import { AuthContext } from '../App'

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useContext(AuthContext)

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('rooms/new')
    }

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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google's logo" />
                        Create your room with Google
                    </button>
                    <div className="separator">or join in a class</div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Enter with the class code"
                        />
                        <Button type="submit">
                            Join class
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}