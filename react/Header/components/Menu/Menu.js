import React from 'react';
import classnames from 'classnames';
import { Text, Card, Section } from 'seek-asia-style-guide/react';
import styles from './Menu.less';

const Menu = ({ messages, shouldShowMenu, loginAvailable }) => {
  return (
    <div className={classnames(styles.root, {
      [styles.showMenu]: shouldShowMenu
    })}>
      <Card>
        <Section>
          JOB SEEKER
        </Section>
      </Card>
      <Card>
        <Section>
          HOME
        </Section>
      </Card>
      <Card>
        <Section>
          MY SEEKASIA
        </Section>
      </Card>
      <Card>
        <Section>
          COMPANY PROFILES
        </Section>
      </Card>
      <Card>
        <Section>
          RESOURCES
        </Section>
      </Card>
      <Card>
        <Section>
          CAREER INSIGHTS
        </Section>
      </Card>
      <Card>
        <Section>
          EDUCATION
        </Section>
      </Card>
      <Card>
        <Section>
          MORE
        </Section>
      </Card>
      { loginAvailable && 
        (<Card>
          <Section>
            LOG IN / SIGN UP
          </Section>
        </Card>)
      }

      <Card>
        <Section>
          EMPLOYER SITE
        </Section>
      </Card>
    </div>
  );
};

export default Menu;