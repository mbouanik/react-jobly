import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  static async logout() {
    await this.request(`/logout`);
  }
  static async login(data) {
    // console.log(data);
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log(res);
    return res.company;
  }
  static async getCompanies() {
    let res = await this.request(`companies`);
    console.log(res);
    return res.companies;
  }

  static async getCompaniesByName(name) {
    console.log(name);
    let res = await this.request(`companies`, { name });
    console.log(res);
    return res.companies;
  }
  static async getJobs() {
    let res = await this.request(`jobs`);
    console.log(res);
    return res.jobs;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    console.log(res);
    return res.job;
  }

  static async applyToJob(username, jobId) {
    console.log(username, jobId);
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    return res.applied;
  }

  static async getJobsByTitle(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }
  static async updateUser(username, userData) {
    console.log(userData);
    let res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
export default JoblyApi;
