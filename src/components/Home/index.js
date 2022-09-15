import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="homepage-details-container">
      <h1 className="main-heading">Find The Job That Fits Your Life</h1>
      <p className="home-page-description">
        Million of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <button type="button" className="find-jobs-btn">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
