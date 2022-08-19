package com.appCadastramento.api.Controller;

import com.appCadastramento.api.Models.Clientes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.appCadastramento.api.Repository.repository_;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/cliente")
public class controller {
	@Autowired
	private repository_ clientesreposity;
	@GetMapping("/user")
	public List<Clientes> Listar(){
	return (List<Clientes>) clientesreposity.findAll();
	}
	@PostMapping("/salvar")
	public Clientes saveCliente(@RequestBody Clientes c) {
		c.setDt_criado(LocalDate.now());
		return clientesreposity.save(c);
	}	 
	
	@GetMapping("/pordatadesc")
	public List<Clientes> PorData(){
		
	return  (List<Clientes>) clientesreposity.findByOrderByDt_criadoDesc();
	}
	@DeleteMapping("/delete/{idade}")
	void deleteCliente(@PathVariable("idade") String idade) {
		clientesreposity.deleteByidade(idade);
	}
	 @PutMapping("/editar/{id}")
	 public Clientes editarclientes(@RequestBody Map<String, String> editadoClientes,@PathVariable  Long id) {
	  Clientes clientes = clientesreposity.findById(id).get();
	  clientes.setNome(editadoClientes.get("nome"));
	  clientes.setIdade(editadoClientes.get("idade"));
	  clientes.setCPF(editadoClientes.get("cpf"));
	  clientes.setEndereco(editadoClientes.get("endereco"));
	  clientesreposity.save(clientes);
	  return clientes;
	  }
	 @GetMapping("/buscar/{nome}")
		public List<Clientes> Pornome(@PathVariable("nome") String nome ){
			
		return  (List<Clientes>) clientesreposity.findbynome(nome);
		}
	}

