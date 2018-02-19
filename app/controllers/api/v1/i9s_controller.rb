class Api::V1::I9sController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    employee = Employee.find(params[:employee_id])
    i9s = employee.i9s
    if i9s.empty?
      render json: { i9: {}, employment_auth_docs: [] }
    else
      i9 = i9s.last
      employment_auth_docs = i9.employment_auth_docs
      render json: { i9: i9, employment_auth_docs: employment_auth_docs }
    end
  end

  def create
    employee = Employee.find(params[:employee_id])
    i9 = I9.new(i9_params)
    i9.employee = employee

    empl_auth_doc = EmploymentAuthDoc.new(employment_auth_doc_params)
    empl_auth_doc.i9 = i9


    if !i9.save
      render json:{ error: i9.errors.full_messages }, status: :unprocessable_entity
    elsif !empl_auth_doc.save
      render json:{ error: empl_auth_doc.errors.full_messages }, status: :unprocessable_entity
    else
      render json: { i9: i9, employment_auth_docs: empl_auth_doc, message: 'Your Form I-9 was successfully saved.' }
    end
  end

  def update
    i9 = I9.find(params[:id])
    employment_auth_docs = i9.employment_auth_docs

    empl_auth_doc = employment_auth_docs.last

    empl_auth_doc.update_attributes(employment_auth_doc_params)
    i9.update_attributes(i9_params)

    if !i9.save
      render json:{ error: i9.errors.full_messages }, status: :unprocessable_entity
    elsif !empl_auth_doc.save
      render json:{ error: empl_auth_doc.errors.full_messages }, status: :unprocessable_entity
    else
      render json: { i9: i9, employment_auth_docs: empl_auth_doc, message: 'Your Form I-9 was successfully updated.' }
    end
  end

  def destroy
    i9 = I9.find(params[:id])
    employment_auth_docs = i9.employment_auth_docs
    employment_auth_docs.each do |empl_auth_doc|
      empl_auth_doc.destroy
    end
    i9.destroy
    render json: { i9: {}, employment_auth_docs: [], message: 'Your Form I-9 was successfully deleted.' }
  end

  protected

  def i9_params
    params.require(:i9).permit(:status)
  end

  def employment_auth_doc_params
    params.require(:employment_auth_doc).permit(:title, :issuing_authority, :number, :expiration)
  end
end
