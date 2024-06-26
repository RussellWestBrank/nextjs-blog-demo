import {withIronSession} from 'next-iron-session';
import {GetServerSideProps, NextApiHandler} from 'next';

export function withSession(handler: NextApiHandler | GetServerSideProps) {
  return withIronSession(handler, {
    // password: process.env.SECRET_COOKIE_PASSWORD,
    // password: 'c2a85490-cc60-4f21-94e8-8dc5dd3220da',
    password: process.env.SECRET,
    cookieName: 'blog',
    cookieOptions: {secure: false}
  });
}