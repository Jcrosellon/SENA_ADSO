<?php

/**
 * Author: JOSE ROSELLON
 * Date:30/03/2024
 * Update Date:
 * Descriptions:This interface are mandatory methods to model to apply in the classes that use it
 * 
 */
interface IModel
{
  //This methods 
  public function spCreate(array $data);
  public function spUpdate(array $data);
  public function spEdit(int $id);
  public function spDelete(int $id);
  public function spShow();
  public function spShowId(int $id);
  public function spGetData(string $data);
}
