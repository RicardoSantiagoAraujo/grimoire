package mythik.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="creature")
public class Creature {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_creature")
	private Integer id;
	
    @Column(nullable=false, columnDefinition = "VARCHAR(25)")
	private String nom;
    
	private String description; 
	
	private boolean dieu; 
	private int attaque; 
	private int pv; 
	private String image; 
	@Column(name="mythologie",columnDefinition = "ENUM('egyptienne', 'chinoise', 'grec', 'nordique')")
	@Enumerated(EnumType.STRING)
	private Mythologie mythologie; 
	@Column(name="type_element",columnDefinition = "ENUM('eau', 'feu', 'air', 'terre')")
	@Enumerated(EnumType.STRING)
	private TypeElement typeElement; 
	
	public Creature() {
		// TODO Auto-generated constructor stub
	}
	
	
	
	public Creature(Integer id, String nom, String description, boolean dieu, int attaque, int pv, String image,
			Mythologie mythologie, TypeElement typeElement) {
		super();
		this.id = id;
		this.nom = nom;
		this.description = description;
		this.dieu = dieu;
		this.attaque = attaque;
		this.pv = pv;
		this.image = image;
		this.mythologie = mythologie;
		this.typeElement = typeElement;
	}
	
	public Creature(String nom, String description, boolean dieu, int attaque, int pv, String image,
			Mythologie mythologie, TypeElement typeElement) {
		this.nom = nom;
		this.description = description;
		this.dieu = dieu;
		this.attaque = attaque;
		this.pv = pv;
		this.image = image;
		this.mythologie = mythologie;
		this.typeElement = typeElement;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDieu() {
		return dieu;
	}

	public void setDieu(boolean dieu) {
		this.dieu = dieu;
	}

	public int getAttaque() {
		return attaque;
	}

	public void setAttaque(int attaque) {
		this.attaque = attaque;
	}

	public int getPv() {
		return pv;
	}

	public void setPv(int pv) {
		this.pv = pv;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Mythologie getMythologie() {
		return mythologie;
	}

	public void setMythologie(Mythologie mythologie) {
		this.mythologie = mythologie;
	}

	public TypeElement getTypeElement() {
		return typeElement;
	}

	public void setTypeElement(TypeElement typeElement) {
		this.typeElement = typeElement;
	}
	
	
}
