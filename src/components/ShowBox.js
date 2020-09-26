import React from 'react'

export default function ShowBox({ id, colour, ChangeColour, addBox, Reset }) {
  return (
    <div style={{ color: colour }}>
      <div >{id + 1}</div>
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
      <div >
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
      <div >
        <button
          type="button"
          onClick={() => ChangeColour(id)}
        >
          colour
        </button>
        <button
          type="button"
          onClick={() => addBox(id)}
        >
          duplicate
        </button>
        <button
          type="button"
          onClick={() => Reset()}
        >
          reset
        </button>
      </div>
    </div>
  )
}
