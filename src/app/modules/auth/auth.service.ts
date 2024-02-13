import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
 
import {
  ILogingUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import bcrypt from 'bcryptjs';
import { jwtToken } from '../../../shared/jwtToken';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { Crew } from '../crew/crew.model';
import { BoatService } from '../boat-service/boatService.model';

// login user

const loginUser = async (payload: ILogingUser): Promise<ILoginUserResponse> => {
  const { email, password,role:loginRole } = payload;
       console.log(loginRole)
   if(loginRole ==='crew'){
     // check user existance
  const isUserExist = await Crew.findOne(
    { email },
    { email: 1, password: 1, role: 1 },
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }
  // console.log(isUserExist)
  //check matched password
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );

  // check password
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password isn't matched");
  }

  const { email: userEmail, role } = isUserExist;

  // create access token
  const accessToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in as string },
  );

  // create refresh token
  const refreshToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_refresh_token as Secret,
    { expiresIn: config.jwt_refresh_expires_in as string },
  );
  const user ={
    userEmail,
    role
  }

  return {
    accessToken,
    refreshToken,
    user
    
  };
   }
   else if(loginRole==='boatservice'){
      // check user existance
  const isUserExist = await BoatService.findOne(
    { email },
    { email: 1, password: 1, role: 1 },
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }
  // console.log(isUserExist)
  //check matched password
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );

  // check password
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password isn't matched");
  }

  const { email: userEmail, role } = isUserExist;

  // create access token
  const accessToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in as string },
  );

  // create refresh token
  const refreshToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_refresh_token as Secret,
    { expiresIn: config.jwt_refresh_expires_in as string },
  );
  const user ={
    userEmail,
    role
  }

  return {
    accessToken,
    refreshToken,
    user
    
  };
   }else{
      // check user existance
  const isUserExist = await Crew.findOne(
    { email },
    { email: 1, password: 1, role: 1 },
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't exist");
  }
  // console.log(isUserExist)
  //check matched password
  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist?.password,
  );

  // check password
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password isn't matched");
  }

  const { email: userEmail, role } = isUserExist;

  // create access token
  const accessToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_secret as Secret,
    { expiresIn: config.jwt_expires_in as string },
  );

  // create refresh token
  const refreshToken = jwtToken.createToken(
    { userEmail, role },
    config.jwt_refresh_token as Secret,
    { expiresIn: config.jwt_refresh_expires_in as string },
  );
  const user ={
    userEmail,
    role
  }

  return {
    accessToken,
    refreshToken,
    user
    
  };
   }

};

export const authService = {
    loginUser,
    
  };
  