import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";




const rootElement = document.getElementById('root') 
const Root = () => {
  return (
    <>
      <BrowserRouter basename='/'>
				<Routes>
					<Route path="/" element={<App />}>
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
							</main>
						}
					/>
					</Route>
				</Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Root />,  rootElement);