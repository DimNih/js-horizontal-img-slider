# Image Book Horiz Slider

Desain Image slider smoth

## Preview

![Preview](test.gif)

## Importan!!
isi ke file css

```bash

 :root {
   font-family: "Urbanist";
   --bg: #0b0a0d;
   --bg-2: #1b1c1f;
   --bg-2: #1f1c21;
   --accent: #864DEB;
 }

 *, *:before, *:after {
   box-sizing: border-box;
   flex-shrink: 0;
 }

 body {
   margin: 0;
   height: 100vh;
   width: 100%;
   background: var(--bg);
   overflow: hidden;
   display: grid;
   place-content: center;
   color: var(--primary-text);
   user-select: none;
 }
 .content {
   --scroll: 1;
   height: 20rem;
   width: 20rem;
   position: relative;
 }
 .content:hover {
   --dscroll: 1.6;
 }
 .content > section {
   --relPosition: 1;
   position: absolute;
   top: 0;
   left: calc(var(--relPosition) * 80%);
   height: 100%;
   width: 100%;
   padding: 0.75rem;
   border-radius: 2rem;
   display: flex;
   flex-direction: column;
   box-shadow: inset 0 0 0 0.125rem #ffffff11;
   overflow: hidden;
   isolation: isolate;
   z-index: calc(1000 + 100 * min(var(--relPosition), -1 * var(--relPosition)));
   transition: box-shadow 0.3s ease-in-out;
 }
 .content > section:after {
   content: "";
   position: absolute;
   inset: 0;
   background: var(--image) center center / cover;
   z-index: -1;
   border-radius: inherit;
   filter: brightness(50%) blur(0.25rem);
   transform: scale(1);
 }

 .content > section > .image {
   flex-grow: 1;
   border-radius: 1.25rem;
   box-shadow: 0 0 0.75rem #00000077;
   background: var(--image) center center / cover;
   filter: blur(5px);
   transition: filter 0.3s ease-in-out;
 }

 .content > section.active > .image {
   filter: blur(0);
 }

 .content > section > .title {
   color: white;
   font-weight: 500;
   padding: 0.25rem 0.125rem;
   font-size: 1.25rem;
 }

 .content > section > .button {
   height: 2.5rem;
   border-radius: 1.25rem;
   background: #ffffff22;
   backdrop-filter: brightness(200%) blur(2rem);
   display: grid;
   place-content: center;
   font-weight: 500;
   color: white;
 }

 .content > section.active {
   box-shadow: 0 0 20px 4px var(--accent);
 }

 #book1 {
   --image: url('https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.0.3&q=85');
 }

 #book2 {
   --image: url('https://cdn.britannica.com/55/142355-131-EFF621AF/books-Stack-literature-pile-reading-entertainment-society-2010.jpg');
 }

 #book3 {
   --image: url('https://images.unsplash.com/photo-1516979187457-637abb4f9353?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.0.3&q=85');
 }
```
