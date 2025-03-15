import './LinkSection.scss';

interface Link {
  nome: string;
  link: string;
}

interface LinkSectionProps {
  titulo: string;
  links: Link[];
}

function LinkSection({ titulo, links }: LinkSectionProps) {
  return (
    <nav className="link-section">
      <h1>{titulo}</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.link}>{link.nome}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LinkSection;
