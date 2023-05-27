import React from 'react'

export default function Contact() {
  return (
    <div className='container contactform'>
      <h1 className='formheading'>Contact me for work/general queries</h1>
      <form>
      <div className="clientname mb-3">
          <label htmlFor="clientname" className="form-label">Name</label>
          <input type="text" className="form-control" id="clientname" />
        </div>
        <div className="mb-3">
          <label htmlFor="clientemail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="clientemail" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="clientphone mb-3">
          <label htmlFor="clientphone" className="form-label">Phone</label>
          <input type="password" className="form-control" id="clientphone" />
        </div>
        <div className="clientquery mb-3">
          <label htmlFor="clientquery" className="form-label">Query</label>
          <input type="text" className="form-control" id="clientquery" />
        </div>
        <div className='buttons'>
        <button id='btn-sm' type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}
