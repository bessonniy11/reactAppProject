import profileReducer, {addPostActionCreator, deletePost} from "./profile-reduser";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likes: 9},
    ]
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[0].message).toBe("it-kamasutra.com");
});
it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(0);
});
