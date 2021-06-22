import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
                <strong>Create class of Q&amp;A on live</strong>
                <p>Answer your audience's questions in real-time</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Google's logo" />
                        Create your room with Google
                    </button>
                    <div>or join in a classroom</div>
                    <form action="">
                        <input
                            type="text"
                            placeholder="Enter with the class code"
                        />
                        <button type="submit">
                            Join class
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}