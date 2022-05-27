import React from 'react'
import Image from 'next/image'
import code from '../images/code.png'

const Home = ({dark}) => {

  return (
    <div className="content">
    <h1>Dark Mode v2</h1>
    <h4>Next.js and <code>styled-components</code></h4>
    <p>
      This is an example Next app that uses a custom hook <code>darkMode</code>. <br/>
      It persists across sessions using <code>localStorage</code> and
      shares state across instances and even tabs and/or browser windows.
    </p>
    <p>
      For example, here is a component that shares the custom hook{' '}
      <code>darkMode</code> with the toggle component above.
    </p>
    <p>
      It is reporting that the current mode is:{' '}
      <code>
        {dark ? 'enabled' : 'disabled'}
      </code>
    </p>
    <p>
      {/* And here's another: <DarkModeCommands /> */}
    </p>
    <p>It couldn't be any easier!</p>
    <p>
      <Image
        alt="code"
        src={code}
        layout={'responsive'}
      />
    </p>
    <p>
      View the source for this{' '}
      <a href="https://next-dark-mode-nu.vercel.app">demo app</a> or see the
      {' '}
      <a href="https://github.com/brookton/next-dark-mode">
        source code on Github
      </a>
      .{' '}
    </p>
  </div>
  )
}

export default Home