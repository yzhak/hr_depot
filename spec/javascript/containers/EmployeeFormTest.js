import EmployeeForm from '../../../app/javascript/containers/EmployeeForm';

describe('EmployeeForm', () => {
  let handleEmployeeForm,
    wrapper;

  beforeEach(() => {
    spyOn(EmployeeForm.prototype, 'handleChange').and.callThrough();
    spyOn(EmployeeForm.prototype, 'handleSubmit').and.callThrough();
    spyOn(EmployeeForm.prototype, 'handleClear').and.callThrough();
    spyOn(EmployeeForm.prototype, 'validateField').and.callThrough();

    handleEmployeeForm = jasmine.createSpy('handleEmployeeForm spy');

    wrapper = mount(<EmployeeForm />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      employee: {
        lastName: '',
        firstName: '',
        middleInitial: '',
        otherLastNames: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zipCode: '',
        birthDate: '',
        email: '',
        phone: ''
      },
      errors: {}
    });
  });

  it('should render an h3 component with the text "Employment Eligibility Verification"', () => {
    expect(wrapper.find('h3').text()).toEqual('Employment Eligibility Verification');
  });

  it('should render an h4 component with the text "Section 1. Employee Information"', () => {
    expect(wrapper.find('h4').text()).toEqual('Section 1. Employee Information');
  });

  it('should render a form', () => {
    expect(wrapper.find('form')).toBePresent()
  });

  it('should have a Clear Form button', () => {
    expect(wrapper.find('button#clear').text()).toEqual('Clear Form')
  });

  it('should have a Submit Form button', () => {
    expect(wrapper.find('button#submit').text()).toEqual('Submit')
  });

  // describe('handleChange(event)', () => {
  //   it('should be invoked when a new value is passed into a field', () => {
  //     wrapper.find('input').simulate('change');
  //     expect(EmployeeForm.prototype.handleChange).toHaveBeenCalled();
  //   });
  //
  //   it('should change the relevant state to the input value', () => {
  //     wrapper.find('TextField').props().handleChange(mockedTextEvent);
  //     expect(wrapper.state()).toEqual({
  //       description: 'Nice Parrot!',
  //       rating: '',
  //       ratings: [1, 2, 3, 4, 5],
  //       errors: {}
  //     });
  //   });
  // });

  describe('handleClear(event)', () => {
    it('should be invoked when the clear button is clicked', () => {
      wrapper.find('button#clear').simulate('click');
      expect(EmployeeForm.prototype.handleClear).toHaveBeenCalled();
    });

    it('should reset state', () => {
      wrapper.setState({
        employee: {
          lastName: 'Smith',
          firstName: 'John',
          middleInitial: '',
          otherLastNames: '',
          street: '',
          apt: '',
          city: '',
          state: '',
          zipCode: '',
          birthDate: '',
          email: '',
          phone: ''
        },
        errors: {}
      })

      wrapper.find('button#clear').simulate('click');
      expect(wrapper.state()).toEqual({
        employee: {
          lastName: '',
          firstName: '',
          middleInitial: '',
          otherLastNames: '',
          street: '',
          apt: '',
          city: '',
          state: '',
          zipCode: '',
          birthDate: '',
          email: '',
          phone: ''
        },
        errors: {}
      });
    });
  });

  describe('handleSubmit(event)', () => {
    // it('should be invoked when the form is submitted with correct values', () => {
    //   wrapper.setState({
    //     employee: {
    //       lastName: 'Smith',
    //       firstName: 'John',
    //       middleInitial: 'M',
    //       otherLastNames: '',
    //       street: '123 Main Street',
    //       apt: '456',
    //       city: 'Boston',
    //       state: 'MA',
    //       zipCode: '02110',
    //       birthDate: '19770303',
    //       email: 'jsmith@email.com',
    //       phone: '6173824657'
    //     },
    //     errors: {}
    //   })
    //
    //   wrapper.find('button#submit').simulate('click');
    //   expect(handleEmployeeForm).toHaveBeenCalled()
    //   expect(EmployeeForm.prototype.validateField).toHaveBeenCalled();
    //   expect(EmployeeForm.prototype.handleSubmit).toHaveBeenCalled();
    // });

    // it('should reset state after passing the form load', () => {
    //   wrapper.setState({
    //     employee: {
    //       lastName: 'Smith',
    //       firstName: 'John',
    //       middleInitial: 'M',
    //       otherLastNames: '',
    //       street: '123 Main Street',
    //       apt: '456',
    //       city: 'Boston',
    //       state: 'MA',
    //       zipCode: '02110',
    //       birthDate: '19770303',
    //       email: 'jsmith@email.com',
    //       phone: '6173824657'
    //     },
    //     errors: {}
    //   })
    //
    //   wrapper.find('button#submit').simulate('click');
    //   expect(wrapper.state()).toEqual({
    //     employee: {
    //       lastName: '',
    //       firstName: '',
    //       middleInitial: '',
    //       otherLastNames: '',
    //       street: '',
    //       apt: '',
    //       city: '',
    //       state: '',
    //       zipCode: '',
    //       birthDate: '',
    //       email: '',
    //       phone: ''
    //     },
    //     errors: {}
    //   });
    // });

    it('should not submit if last name is blank', () => {
      wrapper.setState({
        employee: {
          lastName: '',
          firstName: 'John',
          middleInitial: 'M',
          otherLastNames: '',
          street: '123 Main Street',
          apt: '456',
          city: 'Boston',
          state: 'MA',
          zipCode: '02110',
          birthDate: '19770303',
          email: 'jsmith@email.com',
          phone: '6173824657'
        },
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(EmployeeForm.prototype.validateField).toHaveBeenCalled();
      expect(wrapper.find('li').text()).toEqual('You must provide a valid last name')
    });

    it('should not submit if first name is blank', () => {
      wrapper.setState({
        employee: {
          lastName: 'Smith',
          firstName: '',
          middleInitial: 'M',
          otherLastNames: '',
          street: '123 Main Street',
          apt: '456',
          city: 'Boston',
          state: 'MA',
          zipCode: '02110',
          birthDate: '19770303',
          email: 'jsmith@email.com',
          phone: '6173824657'
        },
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(EmployeeForm.prototype.validateField).toHaveBeenCalled();
      expect(wrapper.find('li').text()).toEqual('You must provide a valid first name')
    });

    // it('should not submit if last name, first name, street number name, city, state, zip code, birth date are blank', () => {
    //   wrapper.setState({
    //     employee: {
    //       lastName: '',
    //       firstName: '',
    //       middleInitial: 'M',
    //       otherLastNames: 'Strong',
    //       street: '',
    //       apt: '456',
    //       city: '',
    //       state: '',
    //       zipCode: '',
    //       birthDate: '',
    //       email: 'jsmith@email.com',
    //       phone: '6173824657'
    //     },
    //     errors: {}
    //   })
    //
    //   wrapper.find('button#submit').simulate('click');
    //   expect(EmployeeForm.prototype.validateField).toHaveBeenCalled();
    //   expect(wrapper.find('li').text()).toEqual('You must provide a valid last name, first name, street number name, city, state, zip code, birth date')
    // });

  });
})
