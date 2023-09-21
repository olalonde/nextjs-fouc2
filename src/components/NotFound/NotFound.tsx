'use client';

// import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './NotFound.module.css';
import Link from 'next/link';

export function NotFound() {
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <div className={classes.title}>Nothing to see here</div>
          <div size="lg" ta="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </div>
        </div>
      </div>
    </div>
  );
}
