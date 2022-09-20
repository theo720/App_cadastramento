package com.appCadastramento.api.Models;


import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CLIENTES")
public class Clientes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String Idade;
	@Column
	private String nome;
	@Column
	private String CPF;
	@Column
	private String endereco;
	@Column
	private LocalDate dt_criado;
	
	public String getIdade() {
		return Idade;
	}
	public void setIdade(String idade) {
		Idade = idade;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCPF() {
		return CPF;
	}
	public void setCPF(String cPF) {
		CPF = cPF;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public LocalDate getDt_criado() {
		return dt_criado;
	}
	public void setDt_criado(LocalDate dt_criado) {
		this.dt_criado = dt_criado;
	}
}