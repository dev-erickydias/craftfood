"use client";
import { useState, useEffect } from "react";
import { Client, Databases, ID, Storage, Permission, Role } from "appwrite";

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    imagem: null,
    estrelas: 3,
    comentario: "",
  });
  const [startIndex, setStartIndex] = useState(0);

  // Configuração do Appwrite Client
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

  const databases = new Databases(client);
  const storage = new Storage(client);
  const COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID;
  const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
  const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

  // Carregar os comentários do banco de dados
  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
        );
        setComentarios(response.documents || []);
      } catch (error) {
        console.error("Erro ao carregar comentários:", error.message);
      }
    };

    // Chamada inicial e configuração do intervalo
    fetchComentarios();
    const intervalId = setInterval(fetchComentarios, 5000); // Atualiza a cada 5 segundos

    // Limpeza do intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [databases, DATABASE_ID, COLLECTION_ID]);

  // Manipular mudanças no formulário
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === "file" ? files[0] : value });
  };

  // Função para obter a URL completa do arquivo
  const getImageUrl = (fileId) => {
    return `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${fileId}/view?project=${process.env.NEXT_PUBLIC_PROJECT_ID}`;
  };

  // Enviar dados para o banco de dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imagem) {
      console.error("Imagem não selecionada");
      return;
    }

    try {
      const fileResponse = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        formData.imagem,
        [Permission.read(Role.any())]
      );

      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          userName: formData.userName,
          imagemUrl: getImageUrl(fileResponse.$id),
          estrelas: parseInt(formData.estrelas),
          comentario: formData.comentario,
        },
        [Permission.read(Role.any())]
      );

      console.log("Documento criado:", response);
      setComentarios((prev) => [...prev, response]);
      setFormData({ userName: "", imagem: null, estrelas: 3, comentario: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Erro ao enviar comentário:", error.message);
    }
  };

  // Função para ver mais comentários
  const handleSeeMore = () => {
    if (startIndex + 4 < comentarios.length) {
      setStartIndex((prevIndex) => prevIndex + 4);
    } else {
      setStartIndex(0); // Voltar para o início se não houver mais páginas
    }
  };

  return (
    <div className="comentario">
      <h2 className="comentario__title">Comentários</h2>
      <button
        className="comentario__button"
        onClick={() => setShowForm(!showForm)}
      >
        Adicionar Comentário
      </button>

      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form__text form__element"
            type="text"
            name="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          <input
            className="form__image form__element"
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
            required
          />
          <input
            className="form__number-stars form__element"
            type="number"
            name="estrelas"
            placeholder="Estrelas (1 a 5)"
            min="1"
            max="5"
            value={formData.estrelas}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form__coments form__element"
            name="comentario"
            placeholder="Comentário"
            maxLength={50}
            value={formData.comentario}
            onChange={handleChange}
            required
          />
          <button className="form__submit" type="submit">
            Enviar
          </button>
        </form>
      )}

      <div className="comentarios-list">
        {comentarios.slice(startIndex, startIndex + 4).map((comentario) => (
          <div key={comentario.$id} className="comentario-card">
            <img
              crossOrigin="anonymous"
              className="comentario__images"
              src={comentario.imagemUrl}
              alt={`${comentario.userName}'s imagem`}
              onError={(e) => {
                console.error("Falha ao carregar imagem:", e);
                e.target.src = "/fallback-image.png";
              }}
            />
            <h3 className="comentario__name">{comentario.userName}</h3>
            <p className="comentario__text">{comentario.comentario}</p>
            <p className="comentario__stars">
              {"⭐".repeat(comentario.estrelas)}
            </p>
          </div>
        ))}
      </div>

      <button className="comentario__button" onClick={handleSeeMore}>
        {startIndex + 4 < comentarios.length ? "Ver mais" : "Voltar ao início"}
      </button>
    </div>
  );
}
