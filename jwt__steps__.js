/**
 * -----------------------------
 * MAKE API SECURE
 * 
 * ----------------------
 * The person who should have
 * 
 * concept: 
 * 1. assign two tokens for each person(access token ,refresh token)
 * 2.token contains:user identification(email,role,etc.). valid for shorter duration
 * 3.Refresh token is used: to recreate an access token.
 * 4. If refresh is invalid then logout the user
 * 
 */

/**
 * 1. jwt-->json web token
 * 2. generate a token by using jwt.sign
 *3. create api set to cookie. http only,secure sameSite

 * 4.from client side:axios withCredentials true
 * 5.cors setup origin and withCredentials:true or credentials include while using fetch
 * 
 */

/**
 * for secure api calls
 * 1. server side: install cookie parser and use it is a middleware
 * 3. req.cookies
 * 4.on the client side: make api call using axios withCredentials:true
 */