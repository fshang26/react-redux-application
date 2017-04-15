import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    // used when mapDispatchToProps omitted in connect(mapStateToProps)
    // this.props.dispatch(courseActions.createCourse(this.state.course));

    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  // 1. render function gets called every time hitting a key
  // 2. Container components ideally just call a child component that contains that markup
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired
};

// ownProps let us access props that are being attached to this component, it's a reference to the component's own props. Now in this case, it'll be most useful for accessing routing related props injected by React Router
// We would expect that when the course data changes after reducer that this mapStateToProps function would receive that new state and end up passing that state as this.props.courses to our component, then component render function gets called.
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))

    // createCourse: course => bindActionCreators(courseActions.createCourse, dispathc)
    actions: bindActionCreators(courseActions, dispatch)
  };
}

// if omit mapDispatchToProps, our component automatically gets a dispatch property attached to it - this.props.dispatch. And that's injected by Connect.
// export default connect(mapStateToProps)(CoursePage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
