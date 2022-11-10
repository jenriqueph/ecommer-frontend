import React from "react";
import nosotros from '../assets/nosotros.jpg'

function Nosotros() {
    return (
        <div className="row">
            <div className="col-md-12">
                <img src={nosotros} className="col-12" />
            </div>
            <div className="col-md-6 offset-3 mt-4">
                <h2>Historia</h2>
                <p>Nullam quis risus eget <a href="/">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                <p><small>This line of text is meant to be treated as fine print.</small></p>
                <p>The following is <strong>rendered as bold text</strong>.</p>
                <p>The following is <em>rendered as italicized text</em>.</p>
                <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
            </div>

            <div className="col-md-3 offset-3 mt-4">
                <figure className="text-start">
                    <blockquote className="blockquote">
                        <h2>Misión</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>            </div>

            <div className="col-md-3 mt-4">
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <h2>Visión</h2>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
            </div>
        </div >
    )
}

export default Nosotros;