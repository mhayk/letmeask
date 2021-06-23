import { Link, useHistory } from 'react-router-dom'
import { FormEvent } from 'react'
import { useAuth } from '../hooks/useAuth'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/Button'

import '../styles/auth.scss'
import { useState } from 'react'
import { database } from '../services/firebase'

export function NewRoom() {
    const { user } = useAuth()
    const history = useHistory()

    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms')

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        })

        history.push(`/rooms/${firebaseRoom.key}`)
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
                    <h2>Create a new class</h2>

                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Class name"
                            value={newRoom}
                            onChange={(e) => setNewRoom(e.target.value)}
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