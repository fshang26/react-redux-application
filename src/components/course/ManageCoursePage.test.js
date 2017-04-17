import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage'; // use named import rather than connected class that is exported by default

// store error: Invariant Violation: Could not find "store" in either the context or props of "Connect(ManageCoursePage)". Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(ManageCoursePage)".
// two options: We could wrap our component in a Provider component or we can export the raw component.
// 1. const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>); this approach is useful if you want to test Redux connect-related code like mapStateToProps.

describe('Mange Course Page', () => {
  it('sets error message when trying to save empty title', () =>{
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
