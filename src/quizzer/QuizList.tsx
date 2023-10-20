import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

export const QuizList = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal
}: {quizzes: Quiz[];
    editQuiz: (qId: number, newQuiz: Quiz) => void;
    deleteQuiz: (qId: number) => void; 
    showModal: () => void;
  }) => {
    const [displayId, setDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId && (
                <>
                    {quizzes.map((quiz: Quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        ></QuizCard>
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            )}
            {quizzes.map((quiz: Quiz) => {
                if (displayId === quiz.id) {
                    return (
                        <QuizView
                            key={quiz.id}
                            quiz={quiz}
                            editQuiz={editQuiz}
                            deleteQuiz={deleteQuiz} 
                            resetView={resetQuizView}
                        ></QuizView>
                    );
                } else{
                    return (<div></div>)
                }
            })}
        </div>
    );
};

/*import React from "react";
import { Movie } from "../interfaces/movie";
import { Stack } from "react-bootstrap";
import { MovieView } from "./MovieView";

export function MovieList({
    movies,
    deleteMovie,
    editMovie,
    setMovieWatched
}: {
    movies: Movie[];
    deleteMovie: (id: string) => void;
    editMovie: (id: string, newMovie: Movie) => void;
    setMovieWatched: (id: string, s: boolean, l: boolean) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {movies.map((movie: Movie) => (
                <div key={movie.id} className="bg-light border m-2 p-2">
                    <MovieView
                        movie={movie}
                        deleteMovie={deleteMovie}
                        editMovie={editMovie}
                        setMovieWatched={setMovieWatched}
                    ></MovieView>
                </div>
            ))}
        </Stack>
    );
}

*/
