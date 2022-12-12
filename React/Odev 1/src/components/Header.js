import React from 'react'

function Header() {
  return (
    <div>
      <header class="header">
          <h1>todos</h1>
          <form>
            <input class="new-todo" placeholder="What needs to be done?" autoFocus />
          </form>
      </header>
    </div>
  )
}

export default Header