<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Controller {

	public function index()
	{
		
// 		print_r($_POST);
// 		print_r($_SERVER);
		
		$this->load->helper('form');
		$this->load->library('form_validation');
		$this->load->library('email');

		// restrict AJAX request only
		if($this->input->is_ajax_request()){
			
			$this->form_validation->set_rules('name', 'Name', 'required|min_length[5]');
			$this->form_validation->set_rules('email', 'Email Address', 'required|valid_email');
			$this->form_validation->set_rules('message', 'Message', 'required|min_length[10]|max_length[180]');
			
			
			 if ($this->form_validation->run() == FALSE)
                {
					echo json_encode(array(
						'message' => validation_errors()
					));
                }
                else
                {
					
					$this->email->from('noreply@kurtobando.com', 'Contact Form | Kurt Obando');
					$this->email->to('me@kurtobando.com');

					$this->email->subject('Message from Contact Form | Kurt Obando');
					$this->email->message(
						"\n" .
						$this->input->post('message') .
						"\n" .
						"From: " .
						$this->input->post('email'));

// 					$this->email->send();
					
					if($this->email->send()){
						echo json_encode(array(
							'message' => "Successfully Sent."
						));
					}
                }
		}
		else{
			exit("No AJAX request received.");
		}
	}
	
}
