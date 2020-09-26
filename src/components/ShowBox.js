import React, { useEffect } from 'react'

export default function ShowBox({ id, colour, ChangeColour, addBox, Reset }) {

  useEffect(()=>{
    document.getElementsByClassName("box")[id].classList.add("box--visible")
  }, [])

  return (
    <div className="box" style={{ color: colour }}>
      <div className="box__counter">{id + 1}</div>
      <h1>What is Lorem Ipsum?</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      <p>
        There is no one who loves pain itself, who seeks after it and wants to
        have it, simply because it is pain...
      </p>
      <hr />
      <div className="box__container">
        <div>
          <h2>What is lorem Ipsum?</h2>
          <p>
            {`
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            `}
          </p>
        </div>
        <div>
          <h2>What is lorem Ipsum?</h2>
          <p>
            {`
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            `}
          </p>
        </div>
      </div>
      <div className="box__buttonscontainer">
        <button
          type="button"
          onClick={() => ChangeColour(id)}
          className="box__button--changecolor"
        >
          colour
        </button>
        <button
          type="button"
          onClick={() => addBox(id)}
          className="box__button--duplicate"
        >
          duplicate
        </button>
        <button
          type="button"
          onClick={() => Reset()}
          className="box__button--reset"
        >
          reset
        </button>
      </div>
    </div>
  )
}
