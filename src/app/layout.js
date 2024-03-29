// 1. import `NextUIProvider` component

import Providers from "@/redux/Providers";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { getListUser } from "@/services/apiUser";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {

	const initListUser = async () => {
		// const response = await getListUser();
		const response = await fetch(`http://localhost:3001/users`);
		console.log('getListUser response: ', response);
		// const users = await response.json();
		// if (response.ok || response.status === 200) {
		// 	const dataUser = users.data;
		// 	console.log('handleLogin dataUser', dataUser, typeof dataUser);
		// 	setUsers(dataUser);
		// }
	};

  // initListUser();

  return (
    <html lang="en">
      <body className="body-class">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
