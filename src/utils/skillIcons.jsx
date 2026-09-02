import {
  SiPython,
  SiPhp,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiDjango,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase, FiFileText, FiCode } from 'react-icons/fi';

const MAP = {
  Java: FaJava,
  Python: SiPython,
  PHP: SiPhp,
  SQL: FiDatabase,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  'Spring Boot': SiSpringboot,
  Hibernate: SiHibernate,
  Django: SiDjango,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  'MS Office': FiFileText,
};

/** Returns an icon element for a skill name, falling back to a generic code glyph. */
export default function skillIcon(name) {
  const Icon = MAP[name] || FiCode;
  return <Icon aria-hidden="true" />;
}
