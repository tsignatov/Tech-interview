
export const manageNumbers = (payload) => {return { type: 'MANAGENUMBERS', payload }};
export const manageCounter = (payload) => {return { type: 'MANAGECOUNTERS', payload }};
export const manageBet = (payload) => {return { type: 'MANAGEBET', payload }};
export const manageDraw = (payload) => {return { type: 'MANAGEDRAW', payload }};
export const getComments = () => {return { type: 'GETCOMMENTS' }};
export const commentsFetchSuccessfulAction = (payload) => {return { type: 'GETCOMMENTSSUCCESSFUL', payload}};