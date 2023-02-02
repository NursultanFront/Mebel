import { createSlice } from '@reduxjs/toolkit';

interface User {
	id: string;
	name: string;
	surname: string;
	points: number;
}

const initialState: User = {
	id: '',
	name: '',
	surname: '',
	points: 0,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});
