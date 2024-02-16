import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import { Container } from 'react-bootstrap';
import * as yup from 'yup';

const init ={
  name:'',
  email:'',
  password:'',
  cpassword:'',
  city:'',
  gender:'',
  hobby:[]
}

const validate=yup.object({
  name:yup.string().min(2,'too short').max(20).required('Name must be required'),
  email:yup.string().email().required('Email must be required'),
  password:yup.string().min(6).required('Password must be required'),
  cpassword:yup.string().oneOf([yup.ref('password'),null]).required('Confirm Password must be required'),
  city:yup.string().required('City must be required'),
  gender:yup.string().required('Gender must be required'),
  hobby:yup.array().min(2).required('Hobby must be required'),
})

function App() {

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =useFormik({
    initialValues:init,
    validationSchema:validate,
    onSubmit:(values) => {
      console.log(values);
    },
  })

  return (
    <div className="App">
        <Container>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="name" className="form-control" id="inputName" name='name' value={values.name} onBlur={handleBlur} onChange={handleChange} />
              {
                errors.name && touched.name ? <span>{errors.name}</span> : null
              }
            </div>
            <div className="col-md-12">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" name='email' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
              {
                errors.email && touched.email ? <span>{errors.email}</span> : null
              }
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
              {
                errors.password && touched.password ? <span>{errors.password}</span> : null
              }
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="inputPassword5" name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} />
              {
                errors.cpassword && touched.cpassword ? <span>{errors.cpassword}</span> : null
              }
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">City</label>
              <select id="inputState" className="form-select" name='city' onBlur={handleBlur} onChange={handleChange}>
                <option value=''>Select City</option>
                <option value='Surat'>Surat</option>
                <option value='Vadodara'>Vadodara</option>
                <option value='Navsari'>Navsari</option>
                <option value='Vapi'>Vapi</option>
              </select>
            </div>

            {
                errors.city && touched.city ? <span>{errors.city}</span> : null
            }

            <div className='col-3'>
              <div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" name='Male' value={values.gender} onBlur={handleBlur} onChange={handleChange}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" name='Female' id="flexRadioDefault2" value={values.gender} onBlur={handleBlur} onChange={handleChange}/>
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div>

            {
                errors.gender && touched.gender ? <span>{errors.gender}</span> : null
            }
            
            
            <div className="col-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" value={values.hobby} onBlur={handleBlur} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gridCheck">Cricket</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" value={values.hobby} onBlur={handleBlur} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gridCheck">Dancing</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" value={values.hobby} onBlur={handleBlur} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gridCheck">Singing</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" value={values.hobby} onBlur={handleBlur} onChange={handleChange}/>
                <label className="form-check-label" htmlFor="gridCheck">Reading</label>
              </div>  
            </div>

            {
                errors.hobby && touched.hobby ? <span>{errors.hobby}</span> : null
            }

            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>

          </form>
        </Container>
    </div>
  );
}

export default App;
