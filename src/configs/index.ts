export type Provider = 'google' | 'github';
export const providers: Provider[] = ['google', 'github'];

// export const SERVER_URL = 'http://192.168.0.110:3000';
export const SERVER_URL = 'http://localhost:3001'; // Từ BE

export const redirectLinks = {
	google: '/auth/google',
	github: '/auth/github',
};

export const accessLinks = {
	google: '/auth/google/callback',
	github: '/auth/github/callback',
};
