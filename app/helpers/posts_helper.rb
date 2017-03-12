module PostsHelper
  def define_member_name(name)
    content_tag :input, nil, type: 'hidden', name: 'member_name', value: name
  end
end
