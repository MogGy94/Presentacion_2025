import * as React from 'react';
import { HeadingSlide} from '../components/Slide/Slide';

export const Slide_2 = (props) => {
    const { par = "" } = props
    return (
        <section className={`storys ${par}`}>
            <div className="imgBx">
                <img src="https://picsum.photos/seed/dos/1500/600" alt="" />
            </div>
            <div className="storyBx">
                <h2>Problematica</h2>
                <p>
                   Errores a la Hora de Organizar y mantener el código CSS
                </p>
            </div>
        </section>
    )
}